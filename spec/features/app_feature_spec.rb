describe 'As a user I can', :js => true  do
  before(:each){
    Question.create prompt: "What's up scruff?"
    Solution.create question_id: Question.last.id
  }
  it 'visit the homepage' do
    visit '/'
    expect(page).to have_selector 'div#main'
  end

  it 'create a new solution' do
    visit '/'
    within 'div#QuestionList' do
      click_on '1'
    end
    expect(page).to have_selector 'div#main'
    expect(page).to have_selector 'div#questionViewPort'
  end

  it 'create a new solution and go back to the homepage' do
    visit '/'
    within 'div#QuestionList' do
      click_on '1'
    end
    click_button 'Home'
    expect(page).to have_selector 'div#main'
    expect(page).to_not have_selector 'div#questionViewPort'
  end

  it 'go to an existing solution' do
    visit '/'
    within 'div#OpenSolutionList' do
      click_on '1'
    end
    expect(page).to have_selector 'div#main'
    expect(page).to have_selector 'div#questionViewPort'
  end

  it 'go to an existing solution and back to the homepage' do
    visit '/'
    within 'div#OpenSolutionList' do
      click_on '1'
    end
    click_button 'Home'
    expect(page).to have_selector 'div#main'
    expect(page).to_not have_selector 'div#questionViewPort'
  end
end
