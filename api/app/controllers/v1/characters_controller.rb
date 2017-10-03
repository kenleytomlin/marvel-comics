class V1::CharactersController < ApplicationController
  before_action :build_query, only: [:index]

  def index
    @result = API_CLIENT.search_characters(@query)

    if @result[:status] === 200
      render json: {
        results: @result[:characters],
        pagination: @result[:pagination],
      }
    elsif @result[:status] >= 400
      render json: @result, status: @result[:status]
    end
  end

  private

  def build_query
    {
      nameStartsWith: params[:nameStartsWith],
      page: params[:page].to_i,
    }.compact
  end
end
