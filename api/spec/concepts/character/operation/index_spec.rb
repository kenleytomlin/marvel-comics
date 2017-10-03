require 'rails_helper'

describe Character::Index do
  before :each do
    stub_const('API_CLIENT', instance_double(Marvel::Api).as_null_object)
  end

  context 'when the request is a success' do
    before :each do
      allow(API_CLIENT).to receive(:search_characters).with(
        nameStartsWith: 'Wolv', page: 0,
      ).and_return(
        status: 200,
        pagination: {
          currentPage: 0,
          totalPages: 0,
          isLast: true,
          totalElements: 0,
        },
        characters: [],
      )
    end

    it 'returns the correct result' do
      result = described_class.(nameStartsWith: 'Wolv', page: 0)

      expect(result['results.characters']).to eql([])
      expect(result['results.pagination']).to eql(
        currentPage: 0,
        totalPages: 0,
        isLast: true,
        totalElements: 0,
      )
    end
  end

  context 'when the request is a failure' do
    before :each do
      allow(API_CLIENT).to receive(:search_characters).and_return(
        status: 409,
        message: 'Error',
      )
    end

    it 'returns the correct result' do
      result = described_class.(nameStartsWith: 'Wolv', page: 0)

      expect(result).to be_failure
    end
  end
end
