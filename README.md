<div align="center" width="100%">
    <h1>Useful Docker Compose</h1>
    <p>Various Docker Compose Files of selfhosted FOSS and proprietary projects.</p>
</div>

## ✨Prerequisites

- Make sure that you have Docker and Docker Compose installed
  - Windows or macOS:
    [Install Docker Desktop](https://www.docker.com/get-started)
  - Linux: [Install Docker](https://www.docker.com/get-started) and then
    [Docker Compose](https://github.com/docker/compose)
- Download some or all of the samples from this repository.

### Running a sample

The root directory of each sample contains the `docker-compose.yaml` which
describes the configuration of service components.

Check the `README.md` of each sample to get more details on the structure and what is the expected output.

All samples can be run in a local environment by going into the root directory of each one and executing:

```console
docker-compose up
```

To Run in dettached mode use -d flag

```console
docker-compose up -d
```

If you don't want to run all the containers but some, do the following:

```console 
docker-compose up -d service1 service2
```


To stop and remove all containers of the sample application run:

```console
docker-compose down
```

To stop and remove all containers with Volume of the sample application run:

```console
docker-compose down -v
```

## ✨ Requirements
- Docker Compose


## 🎓 Usage

- Example config files are usually provided but not yet located in the correct volume bind mount paths. Adjust!

Otherwise, it should be a matter of:
````
git clone https://github.com/RajawatBanna/useful-docker-compose && cd useful-docker-compose
cd <container-of-interest>

# read the notes, comments and adjust compose + volumes + configs
docker compose up
````

> **Note**:
> The samples are intended for use in local development environments such as project setups, tinkering with software stacks, etc. These samples may be deployed in production environments or exposed to the Internet but please adhere to general hardening and security guidelines. Adjust all default credentials, implement a backup process and have a tested disaster recovery plan. Use a reverse proxy to stream-line your web service exposure and provide an encrypted HTTPS communication channel with trusted SSL certificates.

## 🐳 Project List

### Dashboards
- [Homepage](homepage) - A highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations.
- ✨[Dashy](dashy) - Feature-rich homepage for your homelab, with easy YAML configuration.

### Monitoring
- ✨[Portainer](portainer) - Portainer is a lightweight management UI which allows you to easily manage your different Docker environments.
- ✨[Glances](glances) - Glances containers are availables. You can use it to monitor your server and all your other containers !
- ✨[Goaccess](nginx-proxy-manager-goaccess) - Real-time web log analyzer and interactive viewer that visualizes various logs of popular reverse proxies such as Nginx, Nginx Proxy Manager and Traefik.
- [Yacht](yacht) - Yacht is a container management UI with a focus on templates and 1-click deployments. 
- [Dozzle](dozzle) - Dozzle is a small lightweight application with a web based interface to monitor Docker logs. It doesn’t store any log files. It is for live monitoring of your container logs only.
- [Uptimekuma](uptimeKuma) - Uptime Kuma is an easy-to-use self-hosted monitoring tool.
- [Watchtower](watchtower) - A container-based solution for automating Docker container base image updates.
- [Changedetection](examples/changedetection) - Self-hosted tool for staying up-to-date with web-site content changes.
- [Grafana+Loki+Promtail+InfluxDB+Telegraf](examples/grafana-monitoring) - Grafana is the open source analytics & monitoring solution for every database. Combined with other open-source tools like Loki, Promtail, InfluxDB and Telegraf, monitoring data can be aggregated, normalized, filtered, parsed and finally visualized within a web dashboard.
- [Speedtest-Tracker](examples/speedtest-tracker) - Continuously track your internet speed.
- [Openspeedtest](examples/openspeedtest) - A free and open-source HTML5 network performance estimation tool written in vanilla JavaScript and only uses built-in web APIs like XHR, HTML, CSS, JS and SVG.
- [WatchYourLAN](examples/watchyourlan) - Lightweight network IP scanner with web GUI.

### Databases

- [PGSQL](pgsql) - The PostgreSQL database server with PgAdmin client.
- [MYSQL](mysql) - MySQL database server with Php My Admin client.
- [MSSQL](mssql) - Microsoft Sql server database.
- [ORACLE-XE](oracleDB) - Oracle Database XE (21c, 18c, 11g). See gvenzl/oracle-free for Oracle Database 23c Free.
- [MONGO-DB](mongoDB) - MongoDB server with client

### Caching 

- ✨[Redis](redis) - Redis (REmote DIctionary Server in full) is a free and open-source, fast, high-performance, and flexible distributed in-memory computing system that can be used from most if not all programming languages.

- [memached](memcached) - Redis (REmote DIctionary Server in full) is a free and open-source, fast, high-performance, and flexible distributed in-memory computing system that can be used from most if not all programming languages.

### Message Broker

- ✨[RabbitMQ](rabbitmq) - RabbitMQ is an open-source message-broker software
- [Kafka](kafka) - Kafka is an open-source message-broker software

### Time Management 

- [Traggo](traggo) - Time Management Dashboard (For Both Personal & Proffesional)

### Remotely Accessing Servers in Browser

- [Guacamole](guacamole) - Apache Guacamole is a clientless remote desktop gateway supporting protocols like VNC and RDP. 

### Notes Management 

- [Joplin](joplin) - Better Notes Management Application.


### Password Management
- [Vaultwarden](examples/vaultwarden) - Lightweight Bitwarden server API implementation written in Rust. Unlocks paid Bitwarden features such as 2FA.
- [Bitwarden Unified](examples/bitwarden-unified) - Official Bitwarden deployment option (beta) targeting selfhosters by providing a resource-efficient, single Docker image with multiple database support.
- [Passbolt CE](examples/passbolt) - Passbolt CE open source password manager for teams based on GPG.

### Reverse Proxies
- [Traefik](traefik) - Traefik is a modern HTTP reverse proxy and load balancer made to deploy microservices with ease. It supports several backends (Docker, Swarm, Mesos/Marathon, …) to manage its configuration automatically and dynamically.
- ✨[Nginx Proxy Manager](nginx-proxy-manager) - Nginx Proxy Manager is an easy way to accomplish reverse proxying hosts with SSL termination.
- [Caddy](caddy) - The Caddy web server is an extensible, cross-platform, open-source web server written in Go. Caddy obtains and renews TLS certificates for your sites automatically.
- ~~[oauth2-proxy](https://github.com/oauth2-proxy/oauth2-proxy)~~ - A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.

### Identity Providers / Single Sign On (SSO) / 2FA
- [Authelia](authelia) - Authelia is an open-source authentication and authorization server providing two-factor authentication and single sign-on (SSO) for your applications via a web portal. It acts as a companion for reverse proxies by allowing, denying, or redirecting requests. Recommended to combine with [Traefik](traefik).
- [lldap](lldap) - lldap is a lightweight authentication server that provides an opinionated, simplified LDAP interface for authentication. It integrates with many backends, from KeyCloak to Authelia to Nextcloud and more.
- [Authentic](authentic) - authentik is an open-source Identity Provider focused on flexibility and versatility. You can use authentik in an existing environment to add support for new protocols. authentik is also a great solution for implementing signup/recovery/etc in your application, so you don't have to deal with it.
- ~~[Keycloak](https://github.com/keycloak/keycloak)~~ - Keycloak is an open-source Identity and Access Management (IAM) solution for modern applications and services.

### Virtual Private Network (VPN)
- [wg-easy](examples/wg-easy) - The easiest way to install & manage WireGuard on any Linux host. All-in-one deployment of a WireGuard VPN network service + web management UI.
- [WireGuard](examples/wireguard) - WireGuard by Linuxserver.io is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography.
- [IPSec VPN Server](examples/ipsec-vpn-server) - Docker image to run an IPsec VPN server, with IPsec/L2TP, Cisco IPsec and IKEv2.
- ~~[Netbird](https://github.com/netbirdio/netbird)~~ - Quickly connect your computers, servers, cloud instances, and IoT devices into a secure private network. No configuration required.
- ~~[Firezone](https://github.com/firezone/firezone)~~ - Self-hosted secure remote access gateway that supports the WireGuard protocol. It offers a Web GUI, 1-line install script, multi-factor auth (MFA), and SSO.

### Domain Name Service (DNS)
- [AdGuard Home](examples/adguard-home) - AdGuard Home is a network-wide software for blocking ads and tracking.
- [AdGuard Home Sync](examples/adguard-home-sync) - Synchronize AdGuardHome config to replica instances.
- [Technitium DNS](examples/technitium-dns) - An open source authoritative as well as recursive DNS server that can be used for self hosting a DNS server for privacy & security.
- [Pihole](pihole) - Pi-hole is a Linux network-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole and optionally a DHCP server, intended for use on a private network.
- [Cloudflare DDNS](examples/cloudflare-ddns) - Dynamic DNS (DDNS) is a service that keeps the DNS updated with a web property's correct IP address, even if that IP address is constantly being updated.

### Repository Management, Coding and Automation
- [Gitea](examples/gitea) - Community managed fork of Gogs, lightweight code hosting solution.
- [Drone](examples/drone) - Drone is a continuous delivery system built on container technology. Drone uses a simple YAML build file, to define and execute build pipelines inside Docker containers.
- [Gitlab Community](examples/gitlab-ce) -  Self Hosted Git repository management, code reviews, issue tracking, activity feeds and wikis.
- [Code-Server](examples/code-server) - VS Code in the browser, hosted on a remote server.
- [Onedev](examples/onedev) - Self-hosted Git Server with CI/CD and Kanban.
- [n8n](examples/n8n) - Free and source-available fair-code licensed workflow automation tool. Easily automate tasks across different services.

### Tools & Helpers
- [Network-Multitool](examples/network-multitool) - Multi-arch multitool for container network troubleshooting.
- [IT-Tools](examples/it-tools) - Collection of handy online tools for developers, with great UX.
- ~~[GCHQ CyberChef](https://gchq.github.io/CyberChef/)~~ - The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis.

### Recipe Managers
- [Tandoor](examples/tandoor) - Django application to manage, tag and search recipes using either built-in models or external storage providers hosting PDFs, Images or other files.
- [Mealie](examples/mealie) - Material design inspired recipe manager with category and tag management, shopping-lists, meal-planner, and site customizations. Mealie is focused on simple user interactions to keep the whole family using the app.

### Media Management (Photos, Music, Videos, -Arr)
- [Immich](examples/immich) - Self-hosted photo and video backup solution directly from your mobile phone. Alternative to Google Photos.
- [Photoprism](examples/photoprism) - Personal photo management powered by Go and Google TensorFlow. Browse, organize, and share your personal photo collection, using the latest technologies to automatically tag and find pictures.
- [Stash](examples/stash) - Stash is a self-hosted webapp written in Go which organizes and serves your porn.
- [Raveberry](examples/raveberry) - A multi-user music server with a focus on participation.
- [Deemix](examples/deemix) - deemix is a barebone deezer downloader library built from the ashes of Deezloader Remix.
- [Forte](examples/forte) - forte is a self-hosted music platform. You can either connect to a forte server or create your own server for your friends & family. However, it is also very convenient to use forte on your local machine as a stand-alone music player. Supports group streaming sessions.
- [MeTube](examples/metube) - Web GUI for youtube-dl (using the yt-dlp fork) with playlist support. Allows you to download videos and audio only from YouTube and dozens of other sites.
- [Syncthing](examples/syncthing) - Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers.
- [Transmission](examples/transmission) - Transmission is a fast, easy, and free BitTorrent client.
- [FlareSolverr](examples/flaresolverr) - FlareSolverr is a proxy server to bypass Cloudflare and DDoS-GUARD protection.
- [Plex](examples/plex) - Plex organizes video, music and photos from personal media libraries and streams them to smart TVs, streaming boxes and mobile devices.
- [Jellyfin](examples/jellyfin) - Jellyfin is the volunteer-built media solution that puts you in control of your media. Stream to any device from your own server, with no strings attached.
- [Jackett](examples/jackett) - Jackett translates queries from apps (Sonarr, Radarr, SickRage, CouchPotato, Mylar3, Lidarr, DuckieTV, qBittorrent, Nefarious etc.) into tracker-site-specific http queries, parses the html or json response, and then sends results back to the requesting software. This allows for getting recent uploads (like RSS) and performing searches. Jackett is a single repository of maintained indexer scraping & translation logic - removing the burden from other apps.
- [Lidarr](examples/lidarr) - Lidarr is a music collection manager for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new albums from your favorite artists and will interface with clients and indexers to grab, sort, and rename them.
- [Prowlarr](examples/prowlarr) - Prowlarr is an indexer manager/proxy built on the popular *arr .net/reactjs base stack to integrate with your various PVR apps. Prowlarr supports management of both Torrent Trackers and Usenet Indexers. It integrates seamlessly with Lidarr, Mylar3, Radarr, Readarr, and Sonarr offering complete management of your indexers with no per app Indexer setup required (we do it all).
- [Radarr](examples/radarr) - Radarr is a movie collection manager for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new movies and will interface with clients and indexers to grab, sort, and rename them. It can also be configured to automatically upgrade the quality of existing files in the library when a better quality format becomes available.
- [Sonarr](examples/sonarr) - Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.
- [Ombi](examples/ombi) - Ombi is a tool that enables users to manage requests for movies and TV shows on their Plex server. It provides an easy-to-use interface for users to request new content, leave notes and report issues. Ombi also offers notification and newsletter features, making it easier for server owners to manage user requests and share new content updates.
- [LibrePhotos](examples/librephotos) - A self-hosted open source photo management service, with face recognition, geolocation, and more.

### Document Management Systems (DMS)
- [Paperless NGX](examples/paperless-ngx) - A community-supported supercharged version of paperless: scan, index and archive all your physical documents.
- [Papermerge](examples/papermerge) - Free and open source document management system with OCR designed for scanned documents, digital archives, pdf, tiff, jpeg.

### Pastebins
- ✨[PrivateBin](examples/privatebin) - PrivateBin is a minimalist, opensource online pastebin/discussion board where the server has zero knowledge of hosted data.
- [Hemmelig](examples/hemmelig) - Keep your sensitive information out of chat logs, emails, and more with encrypted secrets. Free encrypted secret sharing for everyone!

### File Sharing / Storage
- [Nextcloud](examples/nextcloud) - Access and share your files, calendars, contacts, mail and more from any device, on your terms.
- [Seafile](examples/seafile) - File hosting and sharing solution primary for teams and organizations.
- [SFTPGo](examples/sftpgo) - Fully featured and highly configurable SFTP server with optional HTTP/S, FTP/S and WebDAV support - S3, Google Cloud Storage, Azure Blob.
- [Filebrowser](examples/filebrowser) - filebrowser provides a file managing interface within a specified directory and it can be used to upload, delete, preview, rename and edit your files.
- [FileRun](examples/filerun) - FileRun is a self-hosted File Sync and Share web-based application. It is a full featured web based file manager with an easy to use user interface.
- [Gokapi](examples/gokapi) - Lightweight selfhosted Firefox Send alternative without public upload. AWS S3 supported.
- [Projectsend](examples/projectsend) - ProjectSend is a free, open source software that lets you share files with your clients, focused on ease of use and privacy. It supports clients groups, system users roles, statistics, multiple languages, detailed logs and much more!
- [Pwndrop](examples/pwndrop) - pwndrop is a self-deployable file hosting service for sending out red teaming payloads or securely sharing your private files over HTTP and WebDAV.
- [Droppy](examples/droppy) (deprecated) - droppy is a self-hosted file storage server with a web interface and capabilities to edit files and view media directly in the browser. It is particularly well-suited to be run on low-end hardware like the Raspberry Pi.
- [PairDrop](examples/pairdrop) - PairDrop is a sublime alternative to AirDrop that works on all platforms. Send images, documents or text via peer to peer connection to devices in the same local network/Wi-Fi or to paired devices.
- [MinIO](examples/minio) - MinIO is an object storage server, compatible with Amazon S3 cloud storage service, mainly used for storing unstructured data (such as photos, videos, log files, etc.).

### Publishing, Writing, Blogging, Hosting
- ✨[WordPress](wordpress) - WordPress is a free and open-source content management system written in hypertext preprocessor language and paired with a MySQL or MariaDB database with supported HTTPS.
- ✨[Drupal](drupal) - Drupal is a free and open-source CMS
- [Ghost](examples/ghost) - Ghost is a free and open source blogging platform written in JavaScript and distributed under the MIT License, designed to simplify the process of online publishing for individual bloggers as well as online publications.
- [Nginx + PHP](examples/nginx-php) - Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache. Combined with PHP, a general-purpose scripting language geared toward web development, server-side functions can be implemented for the webs.
- [Overleaf](examples/overleaf) - Overleaf is a collaborative cloud-based LaTeX editor used for writing, editing and publishing scientific documents.
- [Answer](examples/answer) - An open-source knowledge-based community software. You can use it quickly to build Q&A community for your products, customers, teams, and more.
- [Obsidian-Gitsync-Perlite](https://github.com/l4rm4nd/Obsidian-Gitsync-Perlite) - Continuously sync Obsidian markdown notes from GitHub and publish it for the webs.
- [Obsidian-Remote](examples/obsidian-remote) - This docker image allows you to run obsidian in docker as a container and access it via your web browser.
- [Memos](examples/memos) - An open-source, self-hosted memo hub with knowledge management and social networking.
- [Reactive-Resume](examples/rxresume) - A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever.

### Analytics
- [Matomo](examples/matomo) - Matomo is the leading Free/Libre open analytics platform.
- [Plausible](examples/plausible) - Simple, open-source, lightweight (< 1 KB) and privacy-friendly web analytics alternative to Google Analytics.

### Security & Privacy
- [Nessus](examples/nessus) - Nessus is a proprietary vulnerability scanner developed by Tenable, Inc.
- [Greenbone](examples/greenbone) - Greenbone is the world's most trusted provider of open source vulnerability management.
- [SonarQube](examples/sonarqube) - SonarQube is an open-source platform developed by SonarSource for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs and code smells on 29 programming languages.
- [Fail2ban](examples/fail2ban) - Fail2ban is an intrusion prevention software framework. Written in the Python programming language, it is designed to prevent against brute-force attacks.
- [Tor-Browser](examples/tor-browser) - Running a Tor browser instance on any headless server.
- [Firefox](examples/firefox) - Firefox by linuxserver.io allows you to run the popular Firefox web broser on a remote server.
- [Libreddit](examples/libreddit) - Libreddit is a portmanteau of "libre" (meaning freedom) and "Reddit". It is a private front-end like Invidious but for Reddit. Browse the coldest takes of r/unpopularopinion without being tracked.
- [Bibliogram](examples/bibliogram) (deprecated) - Bibliogram is a private front-end frontend to Instagram, similar to Invidous.
- [Nitter](examples/nitter) - Nitter is an alternative front-end to Twitter, and was inspired by Invidious.

### Internet of Things / Smart Home / IT Automation
- [Home Assistant](examples/homeassistant) - Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts. Perfect to run on a Raspberry Pi or a local server.
- [UpSnap](examples/upsnap) - A simple wake on lan app written with SvelteKit, Go, PocketBase and nmap.

### Asset Management
- [Domainmod](examples/domainmod) - DomainMOD is an open source application used to manage your domains and other internet assets in a central location.
- [Snipe-IT](examples/snipe-it) - Snipe-IT is a free, open source IT asset management system written in PHP.

### Backups & Syncing
- [Duplicati](examples/duplicati) - Duplicati is a backup client that securely stores encrypted, incremental, compressed remote backups of local files on cloud storage services and remote file servers.
- [Duplicacy](examples/duplicacy) - A lock-free deduplication cloud backup tool.
- [Syncthing](examples/syncthing) - Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers.

### Wiki & Knowledge Base
- [Bookstack](examples/bookstack) - BookStack is a free and open-source wiki software aimed for a simple, self-hosted, and easy-to-use platform.
- [Wiki.js](examples/wikijs) - Wiki.js is an open source project that has been made possible due to the generous contributions by community backers.
- [Answer](examples/answer) - An open-source knowledge-based community software. You can use it quickly to build Q&A community for your products, customers, teams, and more.
- [Obsidian-Remote](examples/obsidian-remote) - This docker image allows you to run obsidian in docker as a container and access it via your web browser.
- [Obsidian-Gitsync-Perlite](https://github.com/l4rm4nd/Obsidian-Gitsync-Perlite) - Continuously sync Obsidian markdown notes from GitHub and publish it for the webs.
- [Memos](examples/memos) - An open-source, self-hosted memo hub with knowledge management and social networking.

### Finance
- [TRSync](examples/trsync) - Django web frontend for pytr to download all Trade Republic depot data.
- [Money-Balancer](examples/money-balancer) - A simple application for managing debt with your friends!
- [Firefly III](examples/firefly-iii) - A self-hosted manager for your personal finances.

### Communication and Social
- [Mirotalk P2P](examples/mirotalk) - Simple, Secure, Fast Real-Time Video Conferences Up to 4k and 60fps, compatible with all browsers and platforms.
- [Rocket.Chat](examples/rocketchat) - Rocket.Chat is an open-source fully customizable communications platform developed in JavaScript for organizations with high standards of data protection.
- [Answer](examples/answer) - An open-source knowledge-based community software. You can use it quickly to build Q&A community for your products, customers, teams, and more.
- [Excalidraw](examples/excalidraw) - Excalidraw is a virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them.
- [Reactive-Resume](examples/rxresume) - A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever.

### Project Management
- [JetBrains YouTrack](examples/youtrack) - YouTrack is a proprietary, commercial browser-based bug tracker, issue tracking system and project management software developed by JetBrains.
- [Leantime](examples/leantime) - Leantime is an open source project management system for small teams and startups written in PHP, Javascript using MySQL.

## Author

👤 **RajawatBanna**
## Lokesh Singh Rajawat

# Join the community!
