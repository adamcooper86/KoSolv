require 'rails_helper'

RSpec.describe SolutionsController, type: :controller do

  describe "GET #show" do
    it "returns http success" do
      fake_solution = double :solution
      expect(Solution).to receive(:find).with('1').and_return(fake_solution)
      get :show, id: "1"
      expect(response).to have_http_status(:success)
    end
  end

  describe "post #create" do
    it "returns http success" do
      fake_solution = double :solution
      expect(Solution).to receive(:create).with('1').and_return(fake_solution)
      post :create, question_id: "1"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #update" do
    it "returns http success" do
      fake_solution = double :solution
      expect(Solution).to receive(:find).with('1').and_return(fake_solution)
      expect(fake_solution).to receive(:update).with({"question_id"=>"1", "open"=>false, "answer_id"=>"1", "id"=>"1", "controller"=>"solutions", "action"=>"update"}).and_return(fake_solution)
      patch :update, id: "1", question_id: "1", open: false, answer_id: "1"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #delete" do
    it "returns http success" do
      fake_solution = double :solution
      expect(Solution).to receive(:find).with('1').and_return(fake_solution)
      expect(fake_solution).to receive(:destroy)
      delete :destroy, id: "1"
      expect(response).to have_http_status(:success)
    end
  end

end
