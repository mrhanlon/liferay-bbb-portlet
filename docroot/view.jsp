<%
/**
 * Copyright (c) 2000-2011 Liferay, Inc. All rights reserved.
 *
 * The contents of this file are subject to the terms of the Liferay Enterprise
 * Subscription License ("License"). You may not use this file except in
 * compliance with the License. You can obtain a copy of the License by
 * contacting Liferay, Inc. See the License for the specific language governing
 * permissions and limitations under the License, including but not limited to
 * distribution rights of the Software.
 *
 *
 *
 */
%>

<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects />

This is the <b>Backbone bbb</b> portlet.
<main role="main" data-root="${renderRequest.contextPath}/" id="backbone-bbb-portlet-main"></main>
<script data-main="${renderRequest.contextPath}/app/config" src="${renderRequest.contextPath}/vendor/jam/require.js"></script>