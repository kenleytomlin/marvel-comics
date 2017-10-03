class Comic::Index < Trailblazer::Operation
  step :build_query
  step :search

  def search(options, query:, **)
    result = API_CLIENT.search_comics(query)

    options['results.status'] = result[:status]
    if result[:status] == 200
      options['results.status'] = result[:status]
      options['results.comics'] = result[:comics]
      options['results.pagination'] = result[:pagination]
    else
      options['error.message'] = result[:message]
      false
    end
  end

  def build_query(options, params:, **)
    options['query'] = {
      characters: params[:characters],
      page: params[:page].to_i,
    }.compact
  end
end
