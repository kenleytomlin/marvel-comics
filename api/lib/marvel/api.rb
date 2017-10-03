class Marvel::Api
  include HTTParty
  base_uri 'http://gateway.marvel.com/v1/public'

  def initialize(options)
    raise ArgumentError.new 'public_key cannot be nil' unless options[:public_key]
    raise ArgumentError.new 'private_key cannot be nil' unless options[:private_key]

    @public_key = options[:public_key]
    @private_key = options[:private_key]
  end

  def search_characters(params = {})
    query = build_base_query(params)
    query[:orderBy] = '-modified'
    res = self.class.get('/characters', query: query)

    if res.code >= 400
      build_error_response(res)
    elsif res.code === 200
      {
        status: res.code,
        characters: build_character_array(
          res.parsed_response['data']['results'],
        ),
        pagination: build_pagination(res.parsed_response['data']),
      }
    end
  end

  def search_comics(params = {})
    query = build_base_query(params)
    query[:orderBy] = '-onsaleDate'
    query[:format] = 'comic'
    query.merge(params)

    res = self.class.get('/comics', query: query)

    if res.code >= 400
      build_error_response(res)
    elsif res.code === 200
      {
        status: res.code,
        comics: build_comic_array(
          res.parsed_response['data']['results'],
        ),
        pagination: build_pagination(res.parsed_response['data']),
      }
    end
  end

  private

  def build_error_response(res)
    {
      status: res.code,
      message: res.parsed_response['message'],
    }
  end

  def build_base_query(params)
    query = {
      apikey: @public_key,
      ts: Time.now.to_i,
      hash: Digest::MD5.hexdigest(
        "#{Time.now.to_i}#{@private_key}#{@public_key}",
      ),
      offset: params[:page].nil? ? 0 : params[:page] * 20,
    }
    params.delete(:page)
    query.merge(params)
  end

  def build_character_array(results)
    results.map do |r|
      {
        id: r['id'],
        name: r['name'],
        thumbnail: {
          path: r['thumbnail']['path'],
          extension: r['thumbnail']['extension'],
        },
      }
    end
  end

  def build_comic_array(results)
    results.map do |r|
      {
        id: r['id'],
        title: r['title'],
        issueNumber: r['issueNumber'],
        thumbnail: {
          path: r['thumbnail']['path'],
          extension: r['thumbnail']['extension'],
        },
      }
    end
  end

  def build_pagination(data)
    current_page = data['offset'] / data['limit']
    total_pages = data['total'] / data['limit']
    {
      isLast: current_page >= total_pages - 1,
      totalPages: total_pages.zero? && data['total'].positive? ? 1 : total_pages,
      totalElements: data['total'],
      currentPage: current_page,
    }
  end
end
