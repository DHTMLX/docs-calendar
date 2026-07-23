---
sidebar_label: delete-calendar
title: delete-calendar Event
description: You can learn about the delete-calendar event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# delete-calendar

### Description

@short: Fires when removing a calendar

### Usage

~~~jsx {}
"delete-calendar": ({ id: string | number }) => void;
~~~

### Parameters

The callback of the **delete-calendar** event can take an object with the following parameter:

- `id` - (required) an ID of the calendar to be deleted

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "delete-calendar" event
calendar.api.on("delete-calendar", (obj) => {
    console.log(obj);
});
~~~
