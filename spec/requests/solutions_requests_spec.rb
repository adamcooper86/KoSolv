require 'rails_helper'

RSpec.describe SolutionsController, type: :request do

  before(:each){
    Question.create prompt: "Prompt", category: 'Cat'
    Solution.create question_id: Question.last.id
  }

  describe "GET #index" do
    it "returns http success" do
      get "/solutions", {}, { Accept: :json }
      expect(response.status).to eq 200
    end
    it "returns a json object that is an array of solutions" do
      get "/solutions", {}, { Accept: :json }
      expect(JSON.parse(response.body)[0]["question_id"]).to eq Question.last.id
    end
  end

  describe "GET #show" do
    it "returns http success" do
      get "/solutions/#{Solution.first.id}", {}, {Accept: :json}
      expect(response.status).to eq 200
    end
    it "returns a json object that is a question obj" do
      get "/solutions/#{Solution.first.id}", {}, { Accept: :json }
      expect(JSON.parse(response.body)["question_id"]).to eq Question.last.id
    end
  end

  describe "post #create" do
    it "returns http success" do
      post "/solutions", {}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
    it "returns a json object that is a question obj" do
      post "/solutions", {question_id: Question.last.id}, {Accept: :json}
      expect(JSON.parse(response.body)["question_id"]).to eq Question.last.id
    end
  end

  describe "put #update" do
   it "returns http success" do
      put "/solutions/#{Solution.last.id}", {question_id: Question.last.id}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
    it "returns a json object that is a question obj" do
      put "/solutions/#{Solution.last.id}", {question_id: Question.first.id}, {Accept: :json}
      expect(JSON.parse(response.body)["question_id"]).to eq Question.first.id
    end
  end

  describe "delete #destroy" do
    it "returns http success" do
      delete "/solutions/#{Solution.last.id}", {}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
  end
end
