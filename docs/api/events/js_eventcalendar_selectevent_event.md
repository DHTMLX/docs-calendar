---
sidebar_label: select-event
title: select-event Event
description: You can learn about the select-event event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# select-event

### Description

@short: Fires when showing an info popup window

### Usage

~~~jsx {}
"select-event": ({
    id: string | number,
    popup?: boolean
}) => void;
~~~

### Parameters

The callback of the **select-event** event can take an object with the following parameters:

- `id` - (required) an ID of the event to be selected
- `popup` - (optional) allows to show an info popup window (if ***true***)

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "select-event" event
calendar.api.on("select-event", (obj) => {
    console.log(obj);
});
~~~
