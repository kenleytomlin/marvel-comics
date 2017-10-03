class ComicVote::Votes < Trailblazer::Operation
  step :return_all_comic_ids

  def return_all_comic_ids(options, **)
    options['results.comic_ids'] = ::ComicVote.all.pluck(:comic_id)
  end
end
