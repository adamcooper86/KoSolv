describe 'As a user I can', :js => true  do
  before(:each){
    Question.create prompt: "What's up scruff?"
    Solution.create question_id: Question.last.id
    User.create username: 'Used', pin: 1234
  }
  it 'visit the homepage' do
    visit '/'
    expect(page).to have_selector 'div#main'
  end

  it 'visit the homepage and login with a new username and valid pin' do
    visit '/'
    within 'form#login' do
      fill_in 'Username', with: 'Tootles'
      fill_in 'Pin', with: '123'
    end
    click_button 'Come On In!'
    expect(page).to have_selector 'div#main'
    expect(page).to_not have_selector 'form#login'
  end

  it 'visit the homepage but not login with invalid credentials' do
    visit '/'
    within 'form#login' do
      fill_in 'Username', with: 'Used'
      fill_in 'Pin', with: '123'
    end
    click_button 'Come On In!'
    expect(page).to have_selector 'div#main'
    expect(page).to have_selector 'form#login'
    expect(page).to have_content 'That was not a valid Login'
  end

  context 'in the logged in area' do
    before(:each){
      visit '/'
      within 'form#login' do
        fill_in 'Username', with: 'Tootles'
        fill_in 'Pin', with: '123'
      end
      click_button 'Come On In!'
    }
    it 'create a new solution' do
      within 'div#QuestionList' do
        click_on '1'
      end
      expect(page).to have_selector 'div#main'
      expect(page).to have_selector 'div#questionViewPort'
    end

    it 'create a new solution and go back to the homepage' do
      within 'div#QuestionList' do
        click_on '1'
      end
      click_button 'Home'
      expect(page).to have_selector 'div#main'
      expect(page).to_not have_selector 'div#questionViewPort'
    end

    it 'go to an existing solution' do
      within 'div#OpenSolutionList' do
        click_on '1'
      end
      expect(page).to have_selector 'div#main'
      expect(page).to have_selector 'div#questionViewPort'
    end

    it 'go to an existing solution and back to the homepage' do
      within 'div#OpenSolutionList' do
        click_on '1'
      end
      click_button 'Home'
      expect(page).to have_selector 'div#main'
      expect(page).to_not have_selector 'div#questionViewPort'
    end
  end
end
