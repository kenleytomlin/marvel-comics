class V1::CharactersController < ApplicationController
  before_action :build_query, only: [:index]

  def index
    if @query
      @result = API_CLIENT.search_characters(@query)
    else
      @result = API_CLIENT.search_characters
    end

    if @result && @result[:status] === 200
      render :json => { :results => @result[:characters], :pagination => @result[:pagination] }
    elsif @result[:status] >= 400
      render :json => @result, :status => @result[:status]
    end
  end

  private

  def build_query
    if params[:nameStartsWith] || params[:page]
      @query = { :nameStartsWith=> params[:nameStartsWith], :page => params[:page].to_i }.compact
    else
      @query = nil
    end
  end
end
