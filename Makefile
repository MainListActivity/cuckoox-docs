# Copyright © 2024 CuckooX Ltd
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

.PHONY: default
default:
	@echo "Choose a Makefile target:"
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print "  - " $$1}}' | sort

.PHONY: dev
dev:
	@echo "Dev..."
	npm run start

.PHONY: deploy
deploy:
	@echo "Deploy..."
	aws s3 sync --region cn-cd-1 --endpoint-url http://sh.cuckoox.cn:9000 --cache-control "public, max-age=31536000, immutable"  --exclude '.DS_Store' --exclude '*' --include '*.webp' --content-type 'image/webp' ./dist/docs/_astro s3://static/docs/_astro/
	aws s3 sync --region cn-cd-1 --endpoint-url http://sh.cuckoox.cn:9000 --cache-control "public, max-age=31536000, immutable" --exclude '.DS_Store' --exclude '*.webp' ./dist/docs/_astro s3://static/docs/_astro/
	aws s3 sync --region cn-cd-1 --endpoint-url http://sh.cuckoox.cn:9000 --cache-control "public, max-age=86400" --exclude '.DS_Store' ./dist/docs/~partytown s3://static/docs/~partytown/
	aws s3 sync --region cn-cd-1 --endpoint-url http://sh.cuckoox.cn:9000 --cache-control "public, max-age=30" --delete --exclude '*' --include '*.html' ./dist/docs/ s3://static/docs/

.PHONY: stage
stage:
	@echo "Stage..."
	aws s3 sync --region cn-cd-1 --endpoint-url http://sh.cuckoox.cn:9000 --cache-control "public, max-age=31536000, immutable"  --exclude '.DS_Store' --exclude '*' --include '*.webp' --content-type 'image/webp' ./dist/docs/_astro s3://static/docs/_astro/
	aws s3 sync --region cn-cd-1 --endpoint-url http://sh.cuckoox.cn:9000 --cache-control "public, max-age=31536000, immutable" --exclude '.DS_Store' --exclude '*.webp' ./dist/docs/_astro s3://static/docs/_astro/
	aws s3 sync --region cn-cd-1 --endpoint-url http://sh.cuckoox.cn:9000 --cache-control "public, max-age=86400" --exclude '.DS_Store' ./dist/docs/~partytown s3://static/docs/~partytown/
	aws s3 sync --region cn-cd-1 --endpoint-url http://sh.cuckoox.cn:9000 --cache-control "public, max-age=30" --delete --exclude '*' --include '*.html' ./dist/docs/ s3://static/docs/

.PHONY: build
build:
	@echo "Build prod..."
	IS_PROD_BUILD=true pnpm build