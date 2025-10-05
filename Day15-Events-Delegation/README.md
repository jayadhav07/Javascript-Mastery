# 📘 Day 15 – Events & Delegation

## 📖 Topics

- addEventListener
- Event bubbling, delegation,capturing, event.target, event.currentTarget, propgation,
- Hot to stop capturing and bubbling

=> when and in which derection the event will be executed is known as event propagation
=> In event bubbling events are executed from bottom to top
=> event.currentTarget and event.this follows the bubbling concept but event.target does not
=> In event capturing events are executed from top to bottom
=> we can stop capturing and bubbling using event.stopPropagation()
=> In event delegation we add the event to parent element instead of descedents (children) element

## 👨‍💻 Practice

- Add dynamic event handling in Todo

## 🚀 Mini Task

Implement event delegation for delete buttons.

## 🧠 Summary

- Delegation optimizes event management.
