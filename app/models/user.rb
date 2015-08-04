class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  validates :pin, presence: true
end
