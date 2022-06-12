
# project info
PROJ_PATH := $(shell dirname $(abspath $(lastword $(MAKEFILE_LIST))))
BUILD_PATH ?= ${PROJ_PATH}/cmd/${MODULE_PATH}
APP_NAME ?= $(shell echo ${BUILD_PATH} | sed 's/^\(.*\)[/]//')
VERSION ?= V1.0
# build info
GOARCH ?= $(shell go env GOARCH)
GOOS ?= $(shell go env GOOS)
GO_VERSION := $(shell go version)
GO_SHORT_VERSION := $(shell go version | awk '{print $$3}')
BUILD_TIME := $(shell date "+%Y-%m-%d %H:%M:%S")
COMMIT_ID := $(shell git rev-parse HEAD 2>/dev/null)
DOCKER_IMAGE ?=
#VERSION_PKG := github.com/erda-project/erda-infra/base/version
#VERSION_OPS := -ldflags "\
#		-X '${VERSION_PKG}.Version=${ERDA_VERSION}' \
#		-X '${VERSION_PKG}.BuildTime=${BUILD_TIME}' \
#        -X '${VERSION_PKG}.CommitID=${COMMIT_ID}' \
#        -X '${VERSION_PKG}.GoVersion=${GO_VERSION}' \
#		-X '${VERSION_PKG}.DockerImage=${DOCKER_IMAGE}'"
GOPROXY ?= https://goproxy.cn/
GO_BUILD_ENV := PROJ_PATH=${PROJ_PATH} GOPROXY=${GOPROXY} GOPRIVATE=${GOPRIVATE}

#.PHONY: build-version clean tidy

build: build-version submodule tidy
	@echo ${BUILD_PATH}
	cd "${BUILD_PATH}" && \
	${GO_BUILD_ENV} go build ${VERSION_OPS} ${GO_BUILD_OPTIONS} -o "${PROJ_PATH}/bin/${APP_NAME}"
	@ echo "build the ${MODULE_PATH} module successfully!"

build-all: build-version submodule tidy
	@set -o errexit; \
	MODULES=$$(find "./cmd" -maxdepth 10 -type d); \
	for path in $${MODULES}; \
	do \
		HAS_GO_FILE=$$(eval echo $$(bash -c "find "$${path}" -maxdepth 1 -name *.go 2>/dev/null" | wc -l)); \
		if [ $${HAS_GO_FILE} -gt 0 ]; then \
			MODULE_PATH=$${path#cmd/}; \
			echo "gonna build module: $$MODULE_PATH"; \
			MODULE_PATHS="$${MODULE_PATHS} $${path}"; \
		fi; \
	done; \
	mkdir -p "${PROJ_PATH}/bin" && \
	${GO_BUILD_ENV} go build ${VERSION_OPS} ${GO_BUILD_OPTIONS} -o "${PROJ_PATH}/bin" $${MODULE_PATHS}; \
	echo "build all modules successfully!"

build-version:
	@echo ------------ Start Build Version Details ------------
	@echo AppName: ${APP_NAME}
	@echo Arch: ${GOARCH}
	@echo OS: ${GOOS}
	@echo Version: ${VERSION}
	@echo BuildTime: ${BUILD_TIME}
	@echo GoVersion: ${GO_VERSION}
	@echo CommitID: ${COMMIT_ID}
	@echo DockerImage: ${DOCKER_IMAGE}
	@echo ------------ End   Build Version Details ------------

tidy:
	@if [[ -f "${BUILD_PATH}/go.mod" ]]; then \
		echo "go mod tidy: use module-level go.mod" && \
		cd "${BUILD_PATH}" && ${GO_BUILD_ENV} go mod tidy; \
	elif [[ -d "${PROJ_PATH}/vendor" ]]; then \
		echo "go mod tidy: already have vendor dir, skip tidy" ; \
	else \
		echo "go mod tidy: use project-level go.mod" && \
		cd "${PROJ_PATH}" && ${GO_BUILD_ENV} go mod tidy; \
	fi

submodule:
	git submodule update --init

clean:
	rm -rf "${PROJ_PATH}/bin"
	rm go.sum

.PHONY: dockerimage
dockerimage:
	@echo "building Jump Jump docker image..."
	docker build -t studiomj/jump-jump:latest -f build/package/Dockerfile .


.PHONY: docs
docs:
	swag init -g ./internal/app/routers/router.go
