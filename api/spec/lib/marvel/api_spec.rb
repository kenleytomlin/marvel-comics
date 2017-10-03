require 'spec_helper'

RSpec.describe Marvel::Api do
  describe 'initializer' do
    it 'requires an public key' do
      expect do
        described_class.new public_key: nil, private_key: 'private_key'
      end.to raise_error ArgumentError, 'public_key cannot be nil'
    end

    it 'requires a private key' do
      expect do
        described_class.new public_key: 'public_key', private_key: nil
      end.to raise_error ArgumentError, 'private_key cannot be nil'
    end

    it 'initializes an instance of Marvel::Api' do
      expect(
        described_class.new(
          public_key: 'public_key', private_key: 'private_key',
        ),
      ).to be_a Marvel::Api
    end
  end

  describe 'instance methods' do
    describe '#search_characters' do
      context 'when the request returns a 4xx status code' do
        before :each do
          Timecop.freeze Time.local 2016
          stub_request(:get, 'http://gateway.marvel.com/v1/public/characters').with(
            headers: {
              'Accept': '*/*',
              'Accept-Encoding': 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
              'User-Agent': 'Ruby',
            },
            query: {
              'nameStartsWith': 'Wolv',
              'orderBy': '-modified',
              'offset': 0,
              'ts': Time.now.to_i,
              'apikey': 'public_key',
              'hash': 'fa02d3f7d85812f53056e00074845477',
            },
          ).to_return(
            status: 409,
            body: {
              message: 'Missing API key',
            }.to_json,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
          )
          @api = described_class.new(
            public_key: 'public_key',
            private_key: 'private_key',
          )
        end

        it 'returns the status and the message' do
          expect(
            @api.search_characters(nameStartsWith: 'Wolv'),
          ).to eql(
            status: 409,
            message: 'Missing API key',
          )
        end
      end

      context 'when the request is a success' do
        before :each do
          Timecop.freeze Time.local 2016
          @fake_character = {
            id: 1,
            name: 'Wolverine',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/5261675f6b22f',
              extension: 'jpg',
            },
          }
          @api = described_class.new(
            public_key: 'public_key',
            private_key: 'private_key',
          )
        end

        context 'without query parameters' do
          before :each do
            stub_request(:get, 'http://gateway.marvel.com/v1/public/characters').with(
              headers: {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
                'User-Agent': 'Ruby',
              },
              query: {
                'orderBy': '-modified',
                'offset': 0,
                'ts': Time.now.to_i,
                'apikey': 'public_key',
                'hash': 'fa02d3f7d85812f53056e00074845477',
              },
            ).to_return(
              status: 200,
              body: {
                data: {
                  offset: 0,
                  limit: 20,
                  total: 5,
                  count: 5,
                  results: [
                    @fake_character,
                  ],
                },
              }.to_json,
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
            )
          end

          it 'returns the characters' do
            expect(@api.search_characters).to eql(
              status: 200,
              characters: [@fake_character],
              pagination: {
                isLast: true,
                totalPages: 1,
                totalElements: 5,
                currentPage: 0,
              },
            )
          end
        end

        context 'with query parameters' do
          before :each do
            stub_request(:get, 'http://gateway.marvel.com/v1/public/characters').with(
              headers: {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
                'User-Agent': 'Ruby',
              },
              query: {
                'orderBy': '-modified',
                'nameStartsWith': 'Wolv',
                'offset': 0,
                'ts': Time.now.to_i,
                'apikey': 'public_key',
                'hash': 'fa02d3f7d85812f53056e00074845477',
              },
            ).to_return(
              status: 200,
              body: {
                data: {
                  offset: 0,
                  limit: 20,
                  total:  5,
                  count:  5,
                  results: [
                    @fake_character,
                  ],
                },
              }.to_json,
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
            )
          end

          it 'returns the comics' do
            expect(
              @api.search_characters(nameStartsWith: 'Wolv'),
            ).to eql(
              status: 200,
              characters: [@fake_character],
              pagination: {
                isLast: true,
                currentPage: 0,
                totalPages: 1,
                totalElements: 5,
              },
            )
          end
        end
      end
    end

    describe '#search_comics' do
      context 'when the request returns a 4xx status code' do
        before :each do
          Timecop.freeze Time.local 2016
          stub_request(:get, 'http://gateway.marvel.com/v1/public/comics').with(
            headers: {
              'Accept': '*/*',
              'Accept-Encoding': 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
              'User-Agent': 'Ruby',
            },
            query: {
              'format': 'comic',
              'orderBy': '-onsaleDate',
              'offset': 0,
              'ts': Time.now.to_i,
              'apikey': 'public_key',
              'hash': 'fa02d3f7d85812f53056e00074845477',
            },
          ).to_return(
            status: 409,
            body: {
              message: 'Missing API key',
            }.to_json,
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
            },
          )
          @api = described_class.new(
            public_key: 'public_key',
            private_key: 'private_key',
          )
        end

        it 'returns the status and the message' do
          expect(@api.search_comics).to eql(
            status: 409,
            message: 'Missing API key',
          )
        end
      end

      context 'when the request is a success' do
        before :each do
          Timecop.freeze Time.local 2016
          @fake_comic = {
            id: 1,
            title: 'Punisher (1995) #10',
            issueNumber: 10,
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/e0/5841dcd5972c6',
              extension: 'jpg',
            },
          }
          @api = described_class.new(
            public_key: 'public_key',
            private_key: 'private_key',
          )
        end

        after :each do
          Timecop.return
        end

        context 'without query parameters' do
          before :each do
            stub_request(:get, 'http://gateway.marvel.com/v1/public/comics').with(
              headers: {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
                'User-Agent': 'Ruby',
              },
              query: {
                'format': 'comic',
                'orderBy': '-onsaleDate',
                'offset': 0,
                'ts': Time.now.to_i,
                'apikey': 'public_key',
                'hash': 'fa02d3f7d85812f53056e00074845477',
              },
            ).to_return(
              body: {
                data: {
                  offset: 0,
                  limit: 20,
                  total: 100,
                  count: 20,
                  results: [
                    @fake_comic,
                  ],
                },
              }.to_json,
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
            )
          end

          it 'returns the comics' do
            expect(@api.search_comics).to eql(
              status: 200,
              comics: [@fake_comic],
              pagination: {
                isLast: false,
                currentPage: 0,
                totalPages: 5,
                totalElements: 100,
              },
            )
          end
        end

        context 'with query parameters' do
          before :each do
            stub_request(:get, 'http://gateway.marvel.com/v1/public/comics').with(
              headers: {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip;q=1.0,deflate;q=0.6,identity;q=0.3',
                'User-Agent': 'Ruby',
              },
              query: {
                'offset': 20,
                'characters': '1',
                'format': 'comic',
                'orderBy': '-onsaleDate',
                'ts': Time.now.to_i,
                'apikey': 'public_key',
                'hash': 'fa02d3f7d85812f53056e00074845477',
              },
            ).to_return(
              body: {
                data: {
                  offset: 20,
                  limit: 20,
                  total: 100,
                  count: 20,
                  results: [
                    @fake_comic,
                  ],
                },
              }.to_json,
              headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
            )
          end

          it 'returns the comics' do
            result = @api.search_comics(page: 1, characters: 1)

            expect(result).to eql(
              status: 200,
              comics: [@fake_comic],
              pagination: {
                isLast: false,
                currentPage: 1,
                totalPages: 5,
                totalElements: 100,
              },
            )
          end
        end
      end
    end
  end
end
