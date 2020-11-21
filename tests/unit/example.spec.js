import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
	it('renders a div', () => {
		const msg = 'new message';
		const wrapper = shallowMount(App);
		expect(wrapper.contains('div')).toBe(true);
	});
});
