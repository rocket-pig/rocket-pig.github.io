# 'Hullo'
[Hullo PWA](https://rocket-pig.github.io) <--click here to run!

__E2E Encrypted__, *serverless p2p* messaging using bittorrent websockets (thanks entirely to
the awesome [Trystero](https://github.com/dmotz/trystero) library).

..I just designed an interface for it, using the (sadly now abandoned)
[OnsenUI](https://onsen.io/v2/api/js/)

Its a mobile app thats fully installable and ready to use,
Text and camera/image receiving and sending. Create new 'rooms', set
whatever passwords/names/etc you want. Sslf and peers cache msgs in
localStorage. Upon new joins, peers update eachother from their stored
histories.

I got led away to other projects before I did all the things I wanted 
to with this. Maybe I'll come back to it. 

Check out Trystero's page if you want to understand better how 
it works.

Free to use copy share shun ignore shame run-screaming-into-the-night from

In any mobile browser but Firefox, there'll be a popup to install 
it. Once installed it doesnt talk to me or github at all, just uses
bittorrent trackers to find any peers, then WebRTC to link di-rectly.

If the install popup doesnt show or you dismiss it, the install feature can be found again
in the 'three-dots' menu, usually upper right.

(...yah, i could have come up with a better name, Im not a 'branding' person much)
