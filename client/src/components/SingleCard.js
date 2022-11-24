import React, { useState } from "react";

export default function SingleCard(props) {
  return (
    <div class="card">
      <div class="content">
        <img
          class="right floated mini ui image"
          src={`https://semantic-ui.com/images/avatar/large/${props.imag}.jpg`}
        />
        <div class="header">{props.name}</div>
        <div class="meta">{props.date}</div>
        <div class="description">
          {props.name} requested permission to view your contact details
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div
            onClick={() => props.move(true, props.id)}
            class="ui basic green button"
          >
            {" "}
            Approve
          </div>
          <div
            onClick={() => props.move(false, props.id)}
            class="ui basic red button"
          >
            Decline
          </div>
        </div>
      </div>
    </div>
  );
}
