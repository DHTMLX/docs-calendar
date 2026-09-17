---
sidebar_label: add-calendar
title: add-calendar Event
description: You can learn about the add-calendar event in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# add-calendar

### Description

@short: Fires when adding a new calendar

### Usage

~~~jsx {}
"add-calendar": ({ calendar: object }) => void;
~~~

### Parameters

The callback of the **add-calendar** event can take an object with the following parameter:

- `calendar` - (required) an object of the calendar data. The full list of the **calendar** parameters can be found [**here**](api/config/js_eventcalendar_calendars_config.md)

:::info
For handling the inner events of Event Calendar you can use the [**Event Bus methods**](api/overview/internal_eventbus_overview.md)
:::

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// subscribe on the "add-calendar" event
calendar.api.on("add-calendar", (obj) => {
    console.log(obj);
});
~~~
