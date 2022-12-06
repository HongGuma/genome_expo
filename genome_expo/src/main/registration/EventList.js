const EventList = ({ eventList, date, checkedHandler }) => {
  return (
    <ul className="cont-03-tbody">
      {eventList == null ? (
        <li>not founded data</li>
      ) : (
        eventList.map((item, idx) =>
          date != item.e_date ? null : (
            <li key={idx}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => checkedHandler(e.target)}
                  value={item.id}
                />{" "}
                {item.e_name}
              </label>
            </li>
          )
        )
      )}
    </ul>
  );
};

export default EventList;
