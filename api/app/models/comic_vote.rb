class ComicVote < ApplicationRecord
  validates :comic_id, uniqueness: true
end
