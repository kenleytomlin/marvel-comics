class ComicVote::Create < Trailblazer::Operation
  step Model(ComicVote, :new)
  step Contract::Build(constant: ComicVote::Contract::Create)
  step Contract::Validate()
  step Contract::Persist()
end
