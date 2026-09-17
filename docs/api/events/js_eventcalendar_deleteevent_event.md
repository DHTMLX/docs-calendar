---
sidebar_label: delete-event
title: delete-event Event
description: You can learn about the delete-event event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# delete-event

### Description

@short: Fires when removing an event

### Usage

~~~jsx {}
"delete-event": ({ id: string | number }) => void;
~~~

### Parameters

The callback of the **delete-event** event can take an object with the following parameter:

- `id` - (required) an ID of the event to be deleted

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "delete-event" event
calendar.api.on("delete-event", (obj) => {
    console.log(obj);
});
~~~
