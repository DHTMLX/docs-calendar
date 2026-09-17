---
sidebar_label: add-event
title: add-event Event
description: You can learn about the add-event event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# add-event

### Description

@short: Fires when adding a new event

### Usage

~~~jsx {}
"add-event": ({ event: object }) => void;
~~~

### Parameters

The callback of the **add-event** event can take an object with the following parameter:

- `event` - (required) an object of the event data. The full list of the **event** parameters can be found [**here**](api/config/js_eventcalendar_events_config.md)

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "add-event" event
calendar.api.on("add-event", (obj) => {
    console.log(obj);
});
~~~
