require 'rails_helper'

describe ComicVote::Votes do
  it 'returns all the upvoted comic_ids' do
    comic_vote = ComicVote::Create.(comic_id: '123abcd')

    result = described_class.()

    expect(result).to be_success
    expect(result['results.comic_ids']).to eql [comic_vote['model'].comic_id]
  end
end
