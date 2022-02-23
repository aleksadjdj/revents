import EventListItem from "./EventListitem";

export default function EventList({events}) {
    return (
        <>
            {events.map(event => (
                <EventListItem key={event.id} event={event} />
            ))}
        </>
    )
}