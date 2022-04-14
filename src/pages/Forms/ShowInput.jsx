const ShowInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="show_title">Show Title</label>
      <input
        value={form.title ? form.title : ''} onChange={handleChange} id="title"
        required name="title" type="text" placeholder="Show Title" autoComplete="off"
      />
      <label htmlFor="theater">Theater</label>
      <input
        value={form.theater ? form.theater : ''} onChange={handleChange} id="theater"
        required name="theater" type="text" placeholder="Theater" autoComplete="off"
      />
      <label htmlFor="city">City</label>
      <input
        value={form.city ? form.city : ''} onChange={handleChange} id="city"
        required name="city" type="text" placeholder="City" autoComplete="off"
      />
      <label htmlFor="start_date">Start Date:</label>
      <input
        value={form.start_date ? form.start_date : ''} onChange={handleChange} id="start_date"
        required name="start_date" type="text" placeholder="start date: Month 00, 0000" autoComplete="off"
      />
      <label htmlFor="end_date">Last Date:</label>
      <input
        value={form.end_date ? form.end_date : ''} onChange={handleChange} id="end_date"
        required name="end_date" type="text" placeholder="end date: Month 00, 0000" autoComplete="off"
      />
      <label htmlFor="time">Show starts:</label>
      <input
        value={form.time ? form.time : ''} onChange={handleChange} id="time"
        required name="time" type="text" placeholder="time" autoComplete="off"
      />
      <label htmlFor="cast">Cast</label>
      <input
        value={form.cast ? form.cast : ''} onChange={handleChange} id="cast"
        required name="cast" type="text" placeholder="cast" autoComplete="off"
      />
      <label htmlFor="info">Any additional details:</label>
      <input
        value={form.info ? form.info : ''} onChange={handleChange} id="info"
        required name="info" type="text" placeholder="info" autoComplete="off"
      />
      <label htmlFor="ticket_url">Link to ticket purchase:</label>
      <input
        value={form.ticket_url ? form.ticket_url : ''} onChange={handleChange} id="ticket_url"
        required name="ticket_url" type="text" placeholder="ticket purchase url" autoComplete="off"
      />
    </>
  )
}

export default ShowInput