class User < ApplicationRecord
    has_many :tasks

    validates :username, presence: true
    validates :email, presence: true
    validates :password, presence: true, length: { minimum: 5 }
end
