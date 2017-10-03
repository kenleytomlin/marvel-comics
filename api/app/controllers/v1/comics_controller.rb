class V1::ComicsController < ApplicationController
  def index
    result = Comic::Index.(params)

    if result.success?
      render json: { results: result['results.comics'], pagination: result['results.pagination'] }
    else
      render json: { message: result['error.message'] }, status: result['results.status']
    end
  end

  def votes
    result = ComicVote::Votes.()
    render json: { results: result['results.comic_ids'] }
  end

  def upvote
    run ComicVote::Create
    result = ComicVote::Votes.()
    render json: { results: result['results.comic_ids'] }
  end

  def downvote
    run ComicVote::Delete
    result = ComicVote::Votes.()
    render json: { results: result['results.comic_ids'] }
  end
end
