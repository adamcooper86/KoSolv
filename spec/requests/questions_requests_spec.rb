require 'rails_helper'

RSpec.describe QuestionsController, type: :request do

  before(:each){
    Question.create prompt: "Prompt", category: 'Cat'
  }

  describe "GET #index" do
    it "returns http success" do
      get "/questions", {}, { Accept: :json }
      expect(response.status).to eq 200
    end
    it "returns a json object that is an array of questions" do
      get "/questions", {}, { Accept: :json }
      expect(JSON.parse(response.body)[0]["prompt"]).to eq "Prompt"
    end
  end

  describe "GET #show" do
    it "returns http success" do
      get "/questions/#{Question.first.id}", {}, {Accept: :json}
      expect(response.status).to eq 200
    end
    it "returns a json object that is a question obj" do
      get "/questions/#{Question.first.id}", {}, { Accept: :json }
      expect(JSON.parse(response.body)["prompt"]).to eq "Prompt"
    end
  end

  describe "post #create" do
    it "returns http success" do
      post "/questions", {}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
    it "returns a json object that is a question obj" do
      post "/questions", {prompt: "Prompt"}, {Accept: :json}
      expect(JSON.parse(response.body)["prompt"]).to eq "Prompt"
    end
  end

  describe "put #update" do
   it "returns http success" do
      put "/questions/#{Question.last.id}", {prompt: "PromptChanged"}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
    it "returns a json object that is a question obj" do
      put "/questions/#{Question.last.id}", {prompt: "PromptChanged"}, {Accept: :json}
      expect(JSON.parse(response.body)["prompt"]).to eq "PromptChanged"
    end
  end

  describe "delete #destroy" do
    it "returns http success" do
      delete "/questions/#{Question.last.id}", {}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
  end
end
