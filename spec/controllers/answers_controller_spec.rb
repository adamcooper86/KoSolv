require 'rails_helper'

RSpec.describe AnswersController, type: :controller do

  describe "GET #show" do
    it "returns http success" do
      fake_answer = double :answer
      expect(Answer).to receive(:find).with('1').and_return(fake_answer)
      get :show, id: "1"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #create" do
    it "returns http success" do
      fake_answer = double :question
      expect(Answer).to receive(:create).with({"solution_id"=>"1", "controller"=>"answers", "action"=>"create"}).and_return(fake_answer)
      post :create, solution_id: "1"
      expect(response).to have_http_status(:success)
    end
  end

  describe "patch #update" do
    it "returns http success" do
      fake_answer = double :answer
      expect(Answer).to receive(:find).with('1').and_return(fake_answer)
      expect(fake_answer).to receive(:update).with({"question_id"=>"1", "content"=>"content", "answer_id"=>"1", "id"=>"1", "controller"=>"answers", "action"=>"update"}).and_return(fake_answer)
      patch :update, id: "1", question_id: "1", content: "content", answer_id: "1"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #delete" do
    it "returns http success" do
      fake_answer = double :answer
      expect(Answer).to receive(:find).with('1').and_return(fake_answer)
      expect(fake_answer).to receive(:destroy)
      delete :destroy, id: "1"
      expect(response).to have_http_status(:success)
    end
  end
end
