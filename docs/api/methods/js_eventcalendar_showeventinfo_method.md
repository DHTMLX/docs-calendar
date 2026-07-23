---
sidebar_label: showEventInfo()
title: showEventInfo Method
description: You can learn about the showEventInfo method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# showEventInfo()

### Description

@short: Shows an info popup for the event by its ID

### Usage

~~~jsx {}
showEventInfo({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) an **ID** of the event, the info popup will be opened for 

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // initial configuration parameters
});
// open info popup for the event with the "1" ID
calendar.showEventInfo({ id: "1" });
~~~
