require 'rails_helper'

RSpec.describe V1::ComicsController, type: :controller do

  describe "GET #votes" do
    it "returns http success" do
      get :votes

      expect(response).to have_http_status(:success)
    end

    it "retrieves a list of the upvoted comics" do
      expect(ComicVote).to receive(:all).and_return([])

      get :votes
    end
  end

  describe "GET #index" do

    before :each do
      stub_const("API_CLIENT",instance_double(Marvel::Api).as_null_object)
    end

    context "when there are no query params" do
      before :each do
        expect(API_CLIENT).to receive(:search_comics).with(no_args).and_return({
          :status => 200,
          :pagination => {
            :currentPage => 0,
            :totalPages => 0,
            :isLast => true,
            :totalElements => 0
          },
          :comics => []
        })
      end

      it "calls search_comics" do
        get :index
      end

      it "returns http success" do
        get :index

        expect(response).to have_http_status(:success)
      end

      it "returns the correct response" do
        get :index

        expect(response.body).to eql({ "results": [], "pagination": { "currentPage":0, "totalPages": 0, "isLast": true, "totalElements": 0 } }.to_json)
      end
    end

    context "when there are query params" do
      before :each do
        expect(API_CLIENT).to receive(:search_comics).with({ :characters => '1', :page => 0 }).and_return({
          :status => 200,
          :pagination => {
            :currentPage => 0,
            :totalPages => 0,
            :isLast => true,
            :totalElements => 0
          },
          :comics => []
        })
      end

      it "searches the marvel api" do

        get :index, :params => { :characters => 1, :page => 0 }
      end

      it "returns http success" do
        get :index, :params => { :characters => 1, :page => 0 }

        expect(response).to have_http_status(:success)
      end

      it "returns the correct response" do
        get :index, :params => { :characters => 1, :page => 0 }

        expect(response.body).to eql({ "results": [], "pagination": { "currentPage":0, "totalPages": 0, "isLast": true, "totalElements": 0 } }.to_json)
      end
    end

    context "when the request is a failure" do
      it "returns an error code" do
        expect(API_CLIENT).to receive(:search_comics).and_return({
          :status => 409
        })

        get :index

        expect(response).to have_http_status(:conflict)
      end
    end
  end

  describe "POST #upvote" do
    it "returns http success" do
      post :upvote, :params => { :comic_id => 1 }
      expect(response).to have_http_status(:success)
    end

    it "upvotes the comic" do
      expect {
        post :upvote, :params => { :comic_id => 1 }
      }.to change(ComicVote,:count).by 1
    end

    it "returns the users new list of upvoted comics" do
      post :upvote, :params => { :comic_id => 1 }

      expect(response.body).to eql({ :results => [1] }.to_json)
    end
  end

  describe "POST #downvote" do

    before :each do
      @comic_vote = ComicVote.create(:comic_id => 1)
    end

    after :each do
      ComicVote.delete(@comic_vote)
    end

    it "returns http success" do
      delete :downvote, :params => { :comic_id => 1 }

      expect(response).to have_http_status(:success)
    end

    it "returns the users new list of upvoted comics" do
      delete :downvote, :params => { :comic_id => 1 }

      expect(response.body).to eql({ :results => [] }.to_json)
    end

    it "downvotes the comic" do
      expect {
        delete :downvote, :params => { :comic_id => 1 }
      }.to change(ComicVote,:count).by(-1)
    end
  end
end
