class ComicVote::Delete < Trailblazer::Operation
  step :find_by_comic_id
  step :delete!

  def find_by_comic_id(options, params:, **)
    options['model'] = ComicVote.find_by_comic_id(params[:comic_id])
  end

  def delete!(_options, model:, **)
    model.destroy
  end
end
