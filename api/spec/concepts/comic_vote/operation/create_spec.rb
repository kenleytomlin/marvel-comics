require 'rails_helper'

describe ComicVote::Create do
  it 'prohibits empty params' do
    result = described_class.({})

    expect(result).to be_failure
    expect(result['model'].persisted?).to eql false
  end

  it 'creates a new comic vote' do
    result = described_class.(comic_id: 'abcdefg123')

    expect(result).to be_success
    expect(result['model'].persisted?).to eql true
  end
end
