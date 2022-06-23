## TIL GENERATOR

<img width="1788" alt="Screen Shot 2022-06-23 at 8 02 29 pm" src="https://user-images.githubusercontent.com/13482258/175273766-550d0f3b-474c-44b8-944b-5a8774a4b6f7.png">

Pending tasks:

- Add a markdown editor in the app ✅
- Add button controls named "Push to Github" ✅
- Create services for Github API ✅
- Style the button component and position it in the UI ✅
- Once the response is successful
  - Change the button label to successful
  - Clear the editor content
  - Disable the button for the day
  - Show a toast message - use a library for toast
- If the response fails
  - Don't clear the content
  - Show toast why it failed or error message
- For the same day, if you want to add more content create another service update - get the content, append the additional content and update the TIL file for that day, should be straightforward.
- Try to play around with confetti experiment once the TIL is pushed to github, throw some confetti
