class Character::Index < Trailblazer::Operation
  step :build_query
  step :search

  def search(options, query:, **)
    result = API_CLIENT.search_characters(query)

    options['results.status'] = result[:status]
    if result[:status] === 200
      options['results.characters'] = result[:characters]
      options['results.pagination'] = result[:pagination]
    else
      options['error.message'] = result[:message]
      false
    end
  end

  def build_query(options, params:, **)
    options['query'] = {
      nameStartsWith: params[:nameStartsWith],
      page: params[:page].to_i,
    }.compact
  end
end
