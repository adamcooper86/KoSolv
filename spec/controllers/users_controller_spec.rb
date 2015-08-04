require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "GET #create" do
    it "returns http success" do
      get :create, username: 'Jo', pin: '123'
      expect(response).to have_http_status(:success)
    end
  end
end
