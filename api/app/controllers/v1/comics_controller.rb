class V1::ComicsController < ApplicationController
  before_action :build_query, only: [:index]

  def index
    if @query
      @result = API_CLIENT.search_comics(@query)
    else
      @result = API_CLIENT.search_comics
    end

    if @result && @result[:status] === 200
      render :json => { :results => @result[:comics], :pagination => @result[:pagination] }
    elsif @result[:status] >= 400
      render :json => @result, :status => @result[:status]
    end
  end

  def votes
    comic_ids = ComicVote.all.map(&:comic_id)

    render :json => { :results =>  comic_ids }
  end

  def upvote
    comic_vote = ComicVote.new(:comic_id => params[:comic_id])
    comic_vote.save
    upvoted_ids = ComicVote.all.map(&:comic_id)
    render :json => { :results => upvoted_ids }
  end

  def downvote
    comic_vote = ComicVote.find_by_comic_id(params[:comic_id])
    comic_vote.delete
    upvoted_ids = ComicVote.all.map(&:comic_id)
    render :json => { :results => upvoted_ids }
  end

  private

  def build_query
    if params[:characters] || params[:page]
      @query = { :characters => params[:characters], :page => params[:page].to_i }.compact
    else
      @query = nil
    end
  end
end
