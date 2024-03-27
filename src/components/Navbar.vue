<template>
  <nav>
    <ul>
      <li class="navbar__item-messages">
        <span>MESSAGES</span>
      </li>
      <li class="navbar__item-inbox">
        <i class="navbar__item-inbox--icon navbar__item-icons"></i>
        <a class="navbar__item-inbox--text" href="#">Inbox</a>
      </li>
      <li class="navbar__item-outbound">
        <i class="navbar__item-outbound--icon navbar__item-icons"></i>
        <a class="navbar__item-outbound--text" href="#">Outbound</a>
      </li>
      <li class="navbar__item-contacts">
        <i class="navbar__item-contacts--icon navbar__item-icons"></i>
        <a class="navbar__item-contacts--text" href="#">Contacts</a>
      </li>
      <li class="navbar__item-statistic">
        <i class="navbar__item-statistic--icon navbar__item-icons"></i>
        <a class="navbar__item-statistic--text" href="#">Statistic</a>
      </li>

      <li class="navbar__item-tools">
        <span>TOOLS</span>
      </li>
      <li class="navbar__item-chat-editor">
        <i class="navbar__item-chat-editor--icon navbar__item-icons"></i>
        <a class="navbar__item-chat-editor--text" href="#">Chat editor</a>
      </li>
      <li class="navbar__item-automation">
        <i class="navbar__item-automation--icon navbar__item-icons"></i>
        <a class="navbar__item-automation--text" href="#">Automation</a>
      </li>
      <li class="navbar__item-site-tools">
        <i class="navbar__item-site-tools--icon navbar__item-icons"></i>
        <a class="navbar__item-site-tools--text" href="#">Site tools</a>
      </li>

      <li class="navbar__item-settings">
        <span>SETTINGS</span>
      </li>
      <li class="navbar__item-general">
        <i class="navbar__item-general--icon navbar__item-icons"></i>
        <a class="navbar__item-general--text" href="#">General</a>
      </li>
      <li class="navbar__item-account">
        <i class="navbar__item-account--icon navbar__item-icons"></i>
        <a class="navbar__item-account--text" href="#">Account</a>
      </li>
      <li class="navbar__item-billing">
        <i class="navbar__item-billing--icon navbar__item-icons"></i>
        <a class="navbar__item-billing--text" href="#">Billing</a>
      </li>
    </ul>
  </nav>
</template>

<script>
</script>

<style>
nav {
  z-index: 1;
}

ul {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
}

li {
  list-style: none;
}

ul li a {
  text-decoration: none;
  font-size: 16px;
  color: #6C7880;
}

ul li i,
ul li a {
  vertical-align: middle;
  margin: 0.4rem 0;
}

.navbar__item-messages,
.navbar__item-tools,
.navbar__item-settings {
  color: #1B1B1F;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.navbar__item-tools,
.navbar__item-settings {
  margin-top: 2.5rem;
}

.navbar__item-icons {
  margin-right: 0.4rem;
}

.navbar__item-inbox--icon {
  content: url("../assets/navbar-icons/inbox_icon.png");
}

.navbar__item-inbox--text {
  font-weight: bold;
  color: #3D22CF;
}

.navbar__item-outbound--icon {
  content: url("../assets/navbar-icons/outbound_icon.png");
}

.navbar__item-contacts--icon {
  content: url("../assets/navbar-icons/contacts_icon.png");
}

.navbar__item-statistic--icon {
  content: url("../assets/navbar-icons/statistic_icon.png");
}

.navbar__item-chat-editor--icon {
  content: url("../assets/navbar-icons/chat_editor_icon.png");
}

.navbar__item-automation--icon {
  content: url("../assets/navbar-icons/automation_icon.png");
}

.navbar__item-site-tools--icon {
  content: url("../assets/navbar-icons/site_tools_icon.png");
}

.navbar__item-general--icon {
  content: url("../assets/navbar-icons/general_icon.png");
}

.navbar__item-account--icon {
  content: url("../assets/navbar-icons/account_icon.png");
}

.navbar__item-billing--icon {
  content: url("../assets/navbar-icons/billing_icon.png");
}
</style>
