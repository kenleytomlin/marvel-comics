require 'rails_helper'

describe Comic::Index do
  before :each do
    stub_const('API_CLIENT', instance_double(Marvel::Api).as_null_object)
    allow(API_CLIENT).to receive(:search_comics).with(
      characters: 1, page: 0,
    ).and_return(
      status: 200,
      pagination: {
        currentPage: 0,
        totalPages: 0,
        isLast: true,
        totalElements: 0,
      },
      comics: [],
    )
  end

  it 'returns the correct result' do
    result = Comic::Index.(characters: 1, page: 0)

    expect(result['results.comics']).to eql([])
    expect(result['results.pagination']).to eql(
      currentPage: 0,
      totalPages: 0,
      isLast: true,
      totalElements: 0,
    )
  end

  context 'when the request is a failure' do
    before :each do
      allow(API_CLIENT).to receive(:search_comics).with(
        characters: 1, page: 0,
      ).and_return(
        status: 409,
        message: 'Error',
      )
    end

    it 'returns an error code' do
      result = Comic::Index.(characters: 1, page: 0)

      expect(result).to be_failure
    end
  end
end
