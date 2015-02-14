# Branch Metrics Web SDK

This README outlines the functionality of the Branch Metrics Web SDK, and how to easily incorporate it into a web app.

Live demo: [http://s3-us-west-1.amazonaws.com/branch-web-sdk/example.html](http://s3-us-west-1.amazonaws.com/branch-web-sdk/example.html)

## Installation

### Requriements

This SDK requires native browser Javascript and has been tested in all modern browsers with sessionStorage capability. No 3rd party libraries are needed to make use of the SDK as is it 100% native Javascript.

### Browser Specific Support
| Chrome | Firefox | Safari |     IE     |
| ------ | ------- | ------ | ---------- |
|    X   |    X    |   X    |  9, 10, 11 |

### API Key

You will need to create a [Branch Metrics app](http://branch.io) to obtain your app_key.

### Quick Install
*Be sure to replace APP-KEY with your actual app key found in your [account dashboard](https://dashboard.branch.io/#/settings).

# TODO: Update src of actual gziped js file

```javascript
<script type="text/javascript">
!function(e,n,t,s,r,a,i,c,o,m){if(!e[s]||!e[s]._q){for(;c<i.length;)r(a,i[c++]);o=n.createElement(t),o.async=1,o.src=
"https://s3-us-west-1.amazonaws.com/branch-web-sdk/branch-0.3.x.min.js.gzip",m=n.getElementsByTagName(t)[0],m.parentNode.insertBefore(o,m),
e[s]=a}}(window,document,"script","branch",function(e,n){e[n]=function(){e._q.push([n,arguments])}},{_q:[],_v:1},
"init;close;logout;event;profile;link;referrals;credits;redeem;banner".split(";"),0);

branch.init('APP-KEY', function(err, data) {
  document.getElementsByClassName('info')[0].innerHTML = JSON.stringify(data);
});
</script>
```
## API Reference

1. [Constructor](#constructor)
2. [Session Methods](#session-methods)
  + [.init()](#init)
  + [.profile()](#profile)
  + [.close()](#close)
  + [.logout()](#logout)

3. [Event Tracking Methods](#event--action-methods)
  + [.event()](#track)

4. [Deeplinking Methods](#deeplinking-methods)
   + [.link()](#link)
   + [.SMSLink()](#smslink)
   + [.SMSLinkNew()](#smslinknew)
   + [.SMSLinkExisting()](#smslinkexisting)

5. [Smart Banner](#smart-banners)
   + [.banner()](#appbanner)

6. [Referral Methods](#referral-methods)
   + [.referrals()](#referrals)
   + [.credits()](#credits)
   + [.redeem()](#redeem)# Global





* * *

### &#39;init&#39;(app_id, callback) 

Adding the Branch script to your page, automatically creates a window.branch object with all of the external methods described below. All calls made to Branch methods are stored in a queue, so even if the SDK is not fully insantiated, calls made to it will be queed in the order they were originally called. The init function on the Branch object initiates the Branch session and creates a new user session if it doesn't already exist in `sessionStorage`.

##### Usage

```
Branch.init(
  callback (function, optional)
)
```

**Parameters**

**app_id**: `number`, **Required** Found in your Branch dashboard

**callback**: `function | null`, Callback function that reeturns as callback(err, data)

---



### &#39;logout&#39;(callback) 

**Parameters**

**callback**: `function | null`



### &#39;close&#39;(callback) 

**Parameters**

**callback**: `function | null`



### &#39;event&#39;(event, metadata, callback) 

**Parameters**

**event**: `String`

**metadata**: `Object`

**callback**: `function`



### &#39;profile&#39;(identity, callback) 

Sets the profile of a user and returns the data.

**Parameters**

**identity**: `string`, Sets the profile of a user and returns the data.

**callback**: `function`, Sets the profile of a user and returns the data.



### &#39;link&#39;(metadata, callback) 

Createa and returns a deep linking URL.  The `data` parameter can include Facebook [Open Graph data](https://developers.facebook.com/docs/opengraph).

**Parameters**

**metadata**: `Object`, Createa and returns a deep linking URL.  The `data` parameter can include Facebook [Open Graph data](https://developers.facebook.com/docs/opengraph).

**callback**: `function`, Createa and returns a deep linking URL.  The `data` parameter can include Facebook [Open Graph data](https://developers.facebook.com/docs/opengraph).



### &#39;SMSLink&#39;(metadata, callback) 

**Parameters**

**metadata**: `Object`

**callback**: `function`



### &#39;SMSLinkNew&#39;(metadata, callback) 

**Parameters**

**metadata**: `Object`

**callback**: `function`



### &#39;SMSLinkExisting&#39;(phone, callback) 

**Parameters**

**phone**: `String`

**callback**: `function`



### &quot;referrals&quot;(callback) 

**Parameters**

**callback**: `function`



### &quot;credits&quot;(callback) 

**Parameters**

**callback**: `function`



### &quot;redeem&quot;(obj, callback) 

**Parameters**

**obj**: `Object`

**callback**: `function`



### &quot;banner&quot;(obj) 

**Parameters**

**obj**: `Object`




* * *










