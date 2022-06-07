export default function Question() {
  return (
    <>
      <div className='question__question'>
        <p>
          What can you do to avoid someone overlooking your work laptop while
          you work out of public spaces?
        </p>
        <p>
          a) Avoid workng on work laptops in public spaces as much as you could
        </p>
        <p>b) Use a Screen Guard</p>
        <p>c) Be mindful of the environment</p>
        <p>Choose the option that best answers the question.</p>
      </div>
      <div className='question__options'>
        <label>
          <input type='radio' name='option' />
          Only a
        </label>
        <label>
          <input type='radio' name='option' />
          Only b and c
        </label>
        <label>
          <input type='radio' name='option' />
          Only a and c
        </label>
        <label>
          <input type='radio' name='option' />
          a, b, c
        </label>
      </div>
    </>
  );
}
