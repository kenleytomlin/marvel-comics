class V1::CharactersController < ApplicationController
  def index
    result = Character::Index.(params)

    if result.success?
      render json: {
        results: result['results.characters'],
        pagination: result['results.pagination'],
      }
    else
      render json: { message: result['error.message'] }, status: result['results.status']
    end
  end
end
