<template>
	<div class="map-container">
		<p class="title">지역별 모임 한눈에 보기</p>
		<div id="map"></div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// Kakao Maps API에 대한 타입 선언
interface Kakao {
	maps: {
		event: any;
		MarkerClusterer: any;
		LatLng: new (lat: number, lng: number) => any;
		Map: new (container: HTMLElement | null, options: any) => any;
		Marker: new (options: any) => any;
		load: (callback: () => void) => void;
	};
}

// 전역 객체(window)에 kakao 속성을 추가
declare global {
	interface Window {
		kakao: Kakao;
	}
}

onMounted(() => {
	if (window.kakao && window.kakao.maps) {
		initMap();
	} else {
		loadScript();
	}
});

//스크립트 소스 가져오기
const loadScript = () => {
	const script = document.createElement('script');
	script.onload = () => window.kakao.maps.load(initMap);
	script.src =
		'//dapi.kakao.com/v2/maps/sdk.js?appkey=eb1c53c7005075c1e5e3b36b2e7f86f1&autoload=false&libraries=services,clusterer';
	document.head.appendChild(script);
};

//지도생성
const initMap = () => {
	const mapContainer = document.getElementById('map');
	const option = {
		center: new window.kakao.maps.LatLng(36.2683, 127.6358),
		level: 13,
	};

	const map = new window.kakao.maps.Map(mapContainer, option);

	const clusterer = new window.kakao.maps.MarkerClusterer({
		map: map,
		averageCenter: true,
		minLevel: 10,
		disableClickZoom: true,
		styles: [
			{
				width: '70px',
				paddingLeft: '40%',
				border: `2px solid #245E6A`,
				background: 'white',
				color: '#000',
				textAlign: 'center',
				lineHeight: '30px',
				fontSize: '14px',
				fontWeight: 'bold',
				backgroundImage: 'url(/src/assets/images/icon/cluster-icon.png)',
				backgroundSize: '24px 24px',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: '4px center'
			}
		],
		texts: function (count: number) {
			return `${count}개`;
		}
	});

	(async function () {
		try {
			const response = await fetch('http://localhost:3000/positions');

			const responseData = await response.json();

			const markers = responseData.map((position: { lat: number, lng: number }) => {
				const markerPosition = new window.kakao.maps.LatLng(position.lat, position.lng);

				return new window.kakao.maps.Marker({
					position: markerPosition
				});
			});

			clusterer.addMarkers(markers);
		} catch (err) {
			console.log(err);
		}
	})();

	window.kakao.maps.event.addListener(clusterer, 'clusterclick', (cluster: any) => {
		const level = map.getLevel() - 1;

		map.setLevel(level, { anchor: cluster.getCenter() });
	})

};
</script>

<style lang="scss" scoped>
.map-container {
	.title {
		font-size: 1.5rem;
		padding-bottom: 1rem;
	}
}

#map {
	width: 950px;
	height: 750px;
}
</style>
