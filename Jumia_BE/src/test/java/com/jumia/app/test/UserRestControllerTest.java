package com.jumia.app.test;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserRestControllerTest {

	@Autowired
	private WebApplicationContext webApplicationContext;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	}

	@Test
	public void getCustomersApiTest() throws Exception {

//		mockMvc.perform(MockMvcRequestBuilders.get("/user/logout?email=t@dg.com").accept(MediaType.APPLICATION_JSON))
//				.andDo(print()).andExpect(status().isOk());

		mockMvc.perform(MockMvcRequestBuilders.get("/v1/getAll/").accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk());
	}

//	@Test
//	public void getTotalNumberOfUsersAPITest() throws Exception {
//		mockMvc.perform(get("/user/getTotalNumberOfUsers")).andExpect(status().isOk())
//				.andExpect(content().contentType("application/json")).andExpect(jsonPath("$.totalNoOfUsers").value(16))
//				.andExpect(jsonPath("$.totalNoOfLoggedUsers").value(2));
//
//	}

	public static String asJsonString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}

	}

}