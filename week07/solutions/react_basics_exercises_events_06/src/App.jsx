const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, age, color, recommend, button } = form.elements;
    button.disabled = true;

    let hasError = false;

    if (!name.value) {
      alert('Name is required');
      hasError = true;
    } else if (name.value.trim().length < 2) {
      alert('Name has to be at least 2 characters long');
      hasError = true;
    }

    if (!age.value) {
      alert('Age is required');
      hasError = true;
    } else {
      const ageNum = parseInt(age.value, 10);
      if (Number.isNaN(ageNum) || ageNum < 5 || ageNum > 120) {
        alert('Age has to be a number between 5 and 120');
        hasError = true;
      }
    }

    if (hasError) {
      form.reset();
      button.disabled = false;
      return;
    }

    const surveyData = {
      name: name.value.trim(),
      age: parseInt(age.value, 10),
      color: color.value,
      recommend: recommend.checked,
    };

    console.log(surveyData);
    alert('Thanks for completing the survey!');

    form.reset();
    setTimeout(() => {
      button.disabled = false;
    }, 3000);
  };

  return (
    <div className='App'>
      <h1>Mini Survey</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' />

        <label>
          Age
          <input type='text' name='age' inputMode='numeric' pattern='[0-9]*' />
        </label>
        <label>
          Favorite Color
          <select name='color' defaultValue=''>
            <option value='' disabled>
              Select…
            </option>
            <option value='red'>Red</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
          </select>
        </label>
        <fieldset>
          <legend>Would you recommend our site?</legend>
          <label className='checkbox'>
            <input type='checkbox' name='recommend' /> I would recommend this site
          </label>
        </fieldset>
        <button name='button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
