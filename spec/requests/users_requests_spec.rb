require 'rails_helper'

RSpec.describe UsersController, type: :request do

  describe "post #create" do
    it "returns http success" do
      post "/users", {username: 'Jackson', pin: "123"}, {Accept: :json}
      expect(response).to have_http_status(:success)
    end
    it "returns a json object that is a User obj" do
      post "/users", {username: 'Jackson', pin: "123"}, {Accept: :json}
      expect(JSON.parse(response.body)["id"]).to eq User.last.id
    end
    it "returns the correct user if given valid pin" do
      User.create username: "Jackson", pin: "123"
      post "/users", {username: 'Jackson', pin: "123"}, {Accept: :json}
      expect(JSON.parse(response.body)["id"]).to eq User.last.id
    end
    it "returns status code 401 if invalid pin" do
      User.create username: "Jackson", pin: "123"
      post "/users", {username: 'Jackson', pin: "wrong"}, {Accept: :json}
      expect(response.status).to eq 401
    end

  end
end
