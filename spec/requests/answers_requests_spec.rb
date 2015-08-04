require 'rails_helper'

RSpec.describe AnswersController, type: :request do

  before(:each){
    Question.create prompt: "Prompt", category: 'Cat'
    Solution.create question_id: Question.last.id
    Answer.create solution_id: Solution.last.id
  }

  describe "GET #index" do
    it "returns http success" do
      get "/answers", {}, { Accept: :json }
      expect(response.status).to eq 200
    end
    it "returns a json object that is an array of questions" do
      get "/answers", {}, { Accept: :json }
      expect(JSON.parse(response.body)[0]["solution_id"]).to eq Solution.last.id
    end
  end

  describe "GET #show" do
    it "returns http success" do
      get "/answers/#{Answer.last.id}", {}, {Accept: :json}
      expect(response.status).to eq 200
    end
    it "returns a json object that is a answer obj" do
      get "/answers/#{Answer.last.id}", {}, { Accept: :json }
      expect(JSON.parse(response.body)["solution_id"]).to eq Solution.last.id
    end
  end

  describe "post #create" do
    it "returns http success" do
      post "/answers", {}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
    it "returns a json object that is a question obj" do
      post "/answers", {solution_id: Solution.last.id}, {Accept: :json}
      expect(JSON.parse(response.body)["solution_id"]).to eq Solution.last.id
    end
  end

  describe "put #update" do
   it "returns http success" do
      put "/answers/#{Answer.last.id}", {solution_id: Solution.first.id}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
    it "returns a json object that is a question obj" do
      put "/answers/#{Answer.last.id}", {solution_id: Solution.first.id}, {Accept: :json}
      expect(JSON.parse(response.body)["solution_id"]).to eq Solution.first.id
    end
  end

  describe "delete #destroy" do
    it "returns http success" do
      delete "/answers/#{Answer.last.id}", {}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
  end
end
