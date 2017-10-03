require 'rails_helper'

RSpec.describe V1::CharactersController, type: :controller do
  let(:fake_character) do
    {
      id: 1,
      name: 'Wolverine',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/5261675f6b22f',
        extension: 'jpg',
      },
    }
  end

  describe 'GET #index' do
    before :each do
      stub_const('API_CLIENT', instance_double(Marvel::Api).as_null_object)
    end

    context 'when the request is a success' do
      context 'when there are query params' do
        before :each do
          expect(API_CLIENT).to receive(:search_characters).and_return(
            status: 200,
            characters: [fake_character],
            pagination: {
              currentPage: 0,
              totalPages: 1,
              isLast: true,
              totalElements: 1,
            },
          )
        end

        it 'calls search_characters with the correct arguments' do
          get :index, params: { page: 0, nameStartsWith: 'Wolv' }
        end

        it 'returns http success' do
          get :index, params: { page: 0, nameStartsWith: 'Wolv' }

          expect(response).to have_http_status(:success)
        end

        it 'returns the correct response' do
          get :index, params: { page: 0, nameStartsWith: 'Wolv' }

          expect(response.body).to eql(
            {
              "results": [fake_character],
              "pagination": {
                "currentPage": 0,
                "totalPages": 1,
                "isLast": true,
                "totalElements": 1,
              },
            }.to_json,
          )
        end
      end

      context 'when there are no query params' do
        before :each do
          expect(API_CLIENT).to(
            receive(:search_characters).and_return(
              status: 200,
              characters: [fake_character],
              pagination: {
                currentPage: 0,
                totalPages: 1,
                isLast: true,
                totalElements: 1,
              },
            ),
          )
        end

        it 'calls search_characters with no arguments' do
          get :index
        end

        it 'returns http success' do
          get :index

          expect(response).to have_http_status(:success)
        end

        it 'returns the correct response' do
          get :index

          expect(response.body).to eql(
            {
              "results": [fake_character],
              "pagination": {
                "currentPage": 0,
                "totalPages": 1,
                "isLast": true,
                "totalElements": 1,
              },
            }.to_json,
          )
        end
      end
    end

    context 'when the request is a failure' do
      it 'returns an error code' do
        allow(API_CLIENT).to receive(:search_characters).and_return(
          status: 409,
        )

        get :index

        expect(response).to have_http_status(:conflict)
      end
    end
  end
end
