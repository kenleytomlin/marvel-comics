require 'rails_helper'

describe ComicVote::Delete do
  it 'deletes the comic vote' do
    comic_vote = ComicVote::Create.(comic_id: 'abcdef123')

    expect do
      described_class.(comic_id: comic_vote['model'].comic_id)
    end.to change(ComicVote, :count).by(-1)
  end
end
